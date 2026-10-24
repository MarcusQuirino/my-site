import type { APIRoute } from 'astro'
import { cvPdfResponse } from '../../lib/cv-pdf'

export const GET: APIRoute = () => cvPdfResponse('pt-br')
