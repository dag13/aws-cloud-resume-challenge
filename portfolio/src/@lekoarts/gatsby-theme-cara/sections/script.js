// JavaScript method to display view count on the page using AWS Lambda function.
export const getPageViews = async () => {
  try {
    // Fetch data from AWS Lambda function
    const response = await fetch('https://qmkhi6yfiaouun5sb26nynrwnu0uhnwr.lambda-url.us-east-1.on.aws/');
    
    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`Failed to fetch page views. Status: ${response.status}`);
    }cd

    // Parse the JSON data
    const data = await response.json();

    // Update the DOM with the page views
    const pageViewsContainer = document.getElementById('page-views-container');
    pageViewsContainer.innerText = `Views: ${data}`;
  } catch (error) {
    console.error('Error fetching page views:', error.message);
  }
};