export const TARGET_EMAIL = 'jaychhag0@gmail.com';
export const TARGET_PHONE = '8780788806';
export const TARGET_PHONE_INTL = '918780788806';

export interface InquiryPayload {
  companyName?: string;
  contactName?: string;
  jobTitle?: string;
  workEmail?: string;
  phone?: string;
  divisionFocus?: string;
  fleetScale?: string;
  projectLocation?: string;
  tenderNotes?: string;
  fileName?: string;
}

/**
 * Builds standard mailto and web Gmail compose URLs pre-filled for jaychhag0@gmail.com
 */
export function buildEmailLinks(inquiry: InquiryPayload) {
  const subject = `Tender & Services Inquiry: ${inquiry.companyName || 'EPC Contractor'} - ${inquiry.divisionFocus || 'Heavy Machinery'}`;
  
  const body = `Dear VOLTTORQ Heavy Engineering Team,

I am requesting formal tender pricing, technical specifications, and machinery services:

- Company / EPC Contractor: ${inquiry.companyName || 'Not specified'}
- Contact Person: ${inquiry.contactName || 'Procurement Desk'}${inquiry.jobTitle ? ` (${inquiry.jobTitle})` : ''}
- Corporate Email: ${inquiry.workEmail || 'Not specified'}
- Direct Mobile / WhatsApp: ${inquiry.phone || 'Not specified'}
- Machinery Division Focus: ${inquiry.divisionFocus || 'Transformers / Rebar / Weighbridges'}
- Order Fleet Scale: ${inquiry.fleetScale || 'Fleet Inquiry'}
- Target Site / Discharge Location: ${inquiry.projectLocation || 'Domestic / Global Site'}
- Reference Documents / BOQ: ${inquiry.fileName ? `${inquiry.fileName} (Attached)` : 'Will share upon confirmation'}

Technical Requirements & BOQ Details:
${inquiry.tenderNotes || 'Requesting full technical datasheet, delivery schedule, and volume price quotation.'}

Please confirm receipt and dispatch the engineering specification package.

Regards,
${inquiry.contactName || 'Procurement Manager'}
${inquiry.companyName || 'Contractor Entity'}`;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const mailtoUrl = `mailto:${TARGET_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`;
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${TARGET_EMAIL}&su=${encodedSubject}&body=${encodedBody}`;

  return { subject, body, mailtoUrl, gmailWebUrl };
}

/**
 * Builds direct WhatsApp URL pre-typed with service request details to 8780788806
 */
export function buildWhatsAppUrl(inquiry?: InquiryPayload, customMessage?: string): string {
  if (customMessage) {
    return `https://wa.me/${TARGET_PHONE_INTL}?text=${encodeURIComponent(customMessage)}`;
  }

  const message = `Hello VOLTTORQ Heavy Engineering,

I would like to request heavy machinery services & tender pricing:

🏢 Company: ${inquiry?.companyName || 'Infrastructure Contractor'}
👤 Contact: ${inquiry?.contactName || 'Procurement Team'}
📞 Phone: ${inquiry?.phone || 'Direct'}
⚙️ Division: ${inquiry?.divisionFocus || 'Substation Transformers / Rebar Benders / Weighbridges'}
📦 Fleet Scale: ${inquiry?.fleetScale || 'Wholesale Fleet'}
📍 Location: ${inquiry?.projectLocation || 'Site'}

📝 Requirement Details:
${inquiry?.tenderNotes || 'Please share detailed quotation, technical catalogs, and delivery timelines.'}`;

  return `https://wa.me/${TARGET_PHONE_INTL}?text=${encodeURIComponent(message)}`;
}

/**
 * Standard quick inquiry message for header/floating action button
 */
export function getQuickWhatsAppUrl(serviceContext?: string): string {
  const text = serviceContext
    ? `Hello VOLTTORQ Engineering, I am interested in requesting your ${serviceContext} services & tender quotation. Please share details with me.`
    : `Hello VOLTTORQ Heavy Engineering, I am interested in requesting your heavy machinery services & tender pricing (Transformers / Rebar Benders / Weighbridges). Please share catalog and details.`;

  return `https://wa.me/${TARGET_PHONE_INTL}?text=${encodeURIComponent(text)}`;
}
