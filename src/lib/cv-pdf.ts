import PDFDocument from 'pdfkit'
import { cv } from '../data/cv'
import type { Lang } from '../i18n'

// Harvard-style CV: centered name, contact line, uppercase section headings
// with a rule, right-aligned dates, Times serif, black on white.

// Used by /cv.pdf and /pt-br/cv.pdf
export async function cvPdfResponse(lang: Lang): Promise<Response> {
  const { experience, education, skills, languages, labels } = cv[lang]
  const contactLines = [
    [labels.location, 'marcusfilipus@gmail.com'],
    ['linkedin.com/in/marcus-quirino-dev', 'github.com/MarcusQuirino', 'southlikesoftware.com'],
  ]

  const doc = new PDFDocument({ size: 'LETTER', margins: { top: 54, bottom: 54, left: 63, right: 63 } })
  const chunks: Buffer[] = []
  doc.on('data', c => chunks.push(c))
  const done = new Promise<Buffer>(resolve => doc.on('end', () => resolve(Buffer.concat(chunks))))

  const width = doc.page.width - doc.page.margins.left - doc.page.margins.right
  const left = doc.page.margins.left

  const heading = (text: string) => {
    doc.moveDown(0.9)
    doc.font('Times-Bold').fontSize(11).text(text.toUpperCase(), { characterSpacing: 0.5 })
    const y = doc.y + 1
    doc.moveTo(left, y).lineTo(left + width, y).lineWidth(0.6).stroke()
    doc.moveDown(0.4)
  }

  const entry = (title: string, org: string, dates: string, body: string, bullets?: string[]) => {
    const y = doc.y
    doc.font('Times-Bold').fontSize(11).text(org, left, y, { width: width - 120, continued: false })
    doc.font('Times-Roman').fontSize(11).text(dates, left + width - 120, y, { width: 120, align: 'right' })
    doc.font('Times-Italic').fontSize(11).text(title, left)
    doc.font('Times-Roman').fontSize(11).text(body, { width })
    if (bullets?.length) {
      doc.list(bullets, { bulletRadius: 1.5, bulletIndent: 10, textIndent: 12, width: width - 12 })
    }
    doc.moveDown(0.6)
  }

  // Header
  doc.font('Times-Bold').fontSize(18).text('Marcus Filipe Quirino', { align: 'center' })
  doc.moveDown(0.2)
  doc.font('Times-Roman').fontSize(10.5)
  for (const line of contactLines) doc.text(line.join('  •  '), { align: 'center' })

  heading(labels.experience)
  for (const job of experience) {
    entry(job.title, job.company, `${job.start} – ${job.end ?? labels.present}`, job.summary, job.highlights)
  }

  heading(labels.education)
  for (const e of education) {
    doc.font('Times-Bold').fontSize(11).text(e.school)
    doc.font('Times-Italic').fontSize(11).text(e.course)
    doc.font('Times-Roman').fontSize(11).text(e.note)
  }

  heading(labels.skills)
  doc.font('Times-Roman').fontSize(11).text(skills.join(', '), { width })

  heading(labels.languages)
  doc.font('Times-Roman').fontSize(11).text(languages)

  doc.end()
  const pdf = await done
  return new Response(new Uint8Array(pdf), {
    headers: { 'Content-Type': 'application/pdf' },
  })
}
