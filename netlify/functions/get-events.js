// This is your "bodyguard" that keeps your API keys safe!

exports.handler = async (event, context) => {
  // These keys are now hidden from public view
  const TICKETMASTER_KEY = process.env.TICKETMASTER_KEY;
  const EVENTBRITE_KEY = process.env.EVENTBRITE_KEY;
  
  // Get what type of events to fetch
  const { source } = event.queryStringParameters || {};
  
  try {
    if (source === 'ticketmaster') {
      // Fetch from Ticketmaster
      const url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${TICKETMASTER_KEY}&city=Minneapolis&stateCode=MN&classificationName=Arts%20%26%20Theatre&size=50&sort=date,asc`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
      
    } else if (source === 'eventbrite') {
      // Fetch from Eventbrite
      const url = `https://www.eventbriteapi.com/v3/events/search/?location.address=Minneapolis,%20MN&location.within=25mi&categories=105,103&expand=venue,ticket_availability&sort_by=date`;
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${EVENTBRITE_KEY}`
        }
      });
      
      const data = await response.json();
      
      return {
        statusCode: 200,
        body: JSON.stringify(data)
      };
    }
    
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Please specify source: ticketmaster or eventbrite' })
    };
    
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
