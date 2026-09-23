import React, { useState } from 'react';
import { Send, Check, MessageSquare, Phone } from 'lucide-react';
import { MobileSelect } from './MobileSelect';

interface QuoteSectionProps {
  initialService?: string;
  initialOccasion?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  initialService = '',
  initialOccasion = ''
}) => {
  const eventTypes = [
    { id: 'conference', label: 'Conference / Summit' },
    { id: 'church', label: 'Church Crusade' },
    { id: 'launch', label: 'Brand / Product Launch' },
    { id: 'rally', label: 'Public Rally' },
    { id: 'funeral', label: 'Memorial Service' }
  ];

  // Occasion pages send keys like "churches"; map them to the dropdown values
  const occasionToEventType: Record<string, string> = {
    churches: 'church',
    conferences: 'conference',
    launches: 'launch',
    rallies: 'rally',
    funerals: 'funeral'
  };

  const [eventType, setEventType] = useState<string>(
    eventTypes.some((t) => t.id === initialOccasion) ? initialOccasion : (occasionToEventType[initialOccasion] || 'conference')
  );
  const [eventDate, setEventDate] = useState<string>('');
  const [venueLocation, setVenueLocation] = useState<string>('Nairobi');
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    initialService ? [initialService] : ['LED Screens & Video Displays', 'Professional Sound & Audio']
  );
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const availableServices = [
    'LED Screens & Video Displays',
    'Stage & Mood Lighting',
    'Professional Sound & Audio',
    'Stages & Modular Platforms',
    'Pyrotechnics & Special Effects',
    'Generator & Power Rentals'
  ];

  const handleToggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInstantQuote = () => {
    const message = `Hello FEMA Events Kenya,
I would like to request an Audio Visual Quote:
- Event Type: ${eventTypes.find((t) => t.id === eventType)?.label || eventType}
- Event Date: ${eventDate || 'TBD'}
- Venue / Location: ${venueLocation}
- Required Equipment: ${selectedServices.join(', ')}
- Name / Contact: ${contactName || 'Client'} (${contactPhone || 'N/A'})
${notes ? `- Additional Requirements: ${notes}` : ''}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/254722541214?text=${encoded}`, '_blank');
  };

  return (
    <section id="quote-section" className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="bg-white rounded-none p-8 sm:p-12 border-2 border-[#121212] shadow-[8px_8px_0px_0px_#121212] relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-black text-white text-xs font-bold uppercase tracking-widest mb-3 border border-black shadow-[2px_2px_0px_0px_#b83a24]">
            <Phone className="w-3.5 h-3.5 text-[#b83a24]" />
            <span>Direct Equipment Booking &amp; Inquiry</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#121212]">
            Book Your Production Gear &amp; Rigs
          </h2>
          <p className="text-stone-700 text-sm mt-2 font-normal">
            Specify the equipment and date for your event. You can submit the form below or call our production team directly at <strong className="text-stone-900">0722 541 214</strong> to reserve immediately.
          </p>
        </div>

        {submitted ? (
          <div className="bg-stone-100 border-2 border-[#121212] rounded-none p-8 text-center shadow-[4px_4px_0px_0px_#121212]">
            <div className="w-14 h-14 rounded-none bg-black text-white border-2 border-black flex items-center justify-center mx-auto mb-4 shadow-[2px_2px_0px_0px_#b83a24]">
              <Check className="w-8 h-8 text-[#b83a24]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">
              Quote Request Submitted Successfully!
            </h3>
            <p className="text-stone-700 text-sm max-w-md mx-auto mb-6 font-normal">
              Thank you, <strong className="text-stone-900">{contactName || 'Valued Client'}</strong>. Our production manager has received your specs and will call you on <strong className="text-stone-900">{contactPhone || 'your number'}</strong> with a detailed proposal.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleWhatsAppInstantQuote}
                className="bg-[#121212] hover:bg-black text-white text-xs uppercase font-bold tracking-widest px-6 py-3.5 rounded-none border-2 border-black shadow-[3px_3px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="text-stone-800 hover:text-black text-xs font-bold uppercase tracking-wider px-6 py-3 border-2 border-stone-400 hover:border-black rounded-none cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Step 1: Event Context */}
            <div>
              <label htmlFor="eventType" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                1. Select Gathering / Event Type
              </label>
              <MobileSelect
                id="eventType"
                title="Select Event Type"
                value={eventType}
                onChange={setEventType}
                options={eventTypes.map((t) => ({ value: t.id, label: t.label }))}
              />
            </div>

            {/* Step 2: Date & Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="eventDate" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Event Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium"
                />
              </div>

              <div>
                <label htmlFor="venueLocation" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Venue / County
                </label>
                <input
                  id="venueLocation"
                  type="text"
                  placeholder="e.g. KICC, Nairobi or Nakuru"
                  value={venueLocation}
                  onChange={(e) => setVenueLocation(e.target.value)}
                  required
                  className="w-full bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium"
                />
              </div>
            </div>

            {/* Step 3: Equipment Checklist */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-3">
                2. Required Production Disciplines (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {availableServices.map((svc) => {
                  const isChecked = selectedServices.includes(svc);
                  return (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => handleToggleService(svc)}
                      className={`p-3.5 rounded-none border-2 text-left text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-black text-white border-black shadow-[3px_3px_0px_0px_#b83a24]'
                          : 'bg-stone-50 border-stone-300 text-stone-800 hover:border-stone-600'
                      }`}
                    >
                      <span>{svc}</span>
                      <div className={`w-5 h-5 rounded-none border-2 flex items-center justify-center shrink-0 ml-2 ${
                        isChecked ? 'bg-[#b83a24] border-white text-white' : 'border-stone-400 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t-2 border-stone-200">
              <div>
                <label htmlFor="contactName" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Your Name / Organization
                </label>
                <input
                  id="contactName"
                  type="text"
                  placeholder="e.g. Sarah Mwangi / CITAM Events"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium"
                />
              </div>

              <div>
                <label htmlFor="contactPhone" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                  Phone Number / WhatsApp
                </label>
                <input
                  id="contactPhone"
                  type="tel"
                  placeholder="e.g. +254 712 345 678"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium"
                />
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-xs font-bold uppercase tracking-wider text-stone-900 mb-2">
                Special Technical Notes or Run-of-Show Requirements (Optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="e.g., Live streaming needed, hybrid Zoom feeds, specific stage dimensions..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#FAF8F5] border-2 border-[#121212] rounded-none px-4 py-3 text-sm focus:outline-none focus:border-[#b83a24] text-stone-900 font-medium"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                type="submit"
                id="submit-quote-form-btn"
                className="w-full sm:w-2/3 bg-[#b83a24] hover:bg-[#9b2e1b] text-white font-bold py-4 rounded-none text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#121212] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Submit Equipment Booking Request</span>
              </button>

              <button
                type="button"
                id="whatsapp-instant-quote-btn"
                onClick={handleWhatsAppInstantQuote}
                className="w-full sm:w-1/3 bg-[#121212] hover:bg-black text-white font-bold py-4 rounded-none text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#b83a24] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Book via WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-stone-600 font-bold pt-2 flex-wrap">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#b83a24]" />
                Call Desk: 0722 541 214
              </span>
              <span>&bull;</span>
              <span>24/7 Rigging &amp; Tech Support</span>
              <span>&bull;</span>
              <span>Delivered Nationwide Across Kenya</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

