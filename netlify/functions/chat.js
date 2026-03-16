/* ══════════════════════════════════════════════════════
   Innov8 Development — Chatbot Proxy
   Netlify Function: /.netlify/functions/chat

   Ukrywa klucz API Anthropic po stronie serwera.
   Klucz ustaw w: Netlify → Site configuration
                  → Environment variables
                  → ANTHROPIC_API_KEY
══════════════════════════════════════════════════════ */

exports.handler = async (event) => {

  // Odrzuć wszystko oprócz POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let messages;
  try {
    const body = JSON.parse(event.body);
    messages = body.messages;
    if (!messages || !Array.isArray(messages)) throw new Error('invalid');
  } catch (e) {
    return { statusCode: 400, body: 'Bad Request' };
  }

  const SYSTEM_PROMPT = `You are a professional assistant for Innov8 Development, a Warsaw-based real estate developer.

CONTACT: +48 535 033 499 | biuro@innov-8.pl | ul. Rzymowskiego 30/205, 02-697 Warszawa
HOURS: Mon-Fri 8:00-16:00

PROJECTS:
- Sabały 52: 17 studios, tenement renovation, Warsaw — sales open
- Sycowska 33: 9 apartments, Warsaw Włochy — sales open
- Ojrzanów: 7 premium homes ~200m², near Warsaw — permit in progress, cost 7-8M PLN, target sales 12M PLN
- Czarny Las: pipeline project

INVESTOR PROGRAM:
JV structure per SPV (special purpose vehicle). Investor provides 90-95% equity, Innov8 contributes 5-10% + acts as operator. Promote (profit share above IRR hurdle) applies. First institutional project: Ojrzanów.

STYLE RULES:
- Professional, concise — max 3-4 sentences per reply
- Respond in the same language the user writes in (Polish or English)
- End every reply with an invitation to contact directly
- Never promise specific financial returns or guaranteed IRR figures`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages
      })
    });

    if (!response.ok) {
      console.error('Anthropic API error:', response.status);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'upstream_error' })
      };
    }

    const data = await response.json();
    const reply = data.content[0].text;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ reply })
    };

  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'internal_error' })
    };
  }
};
