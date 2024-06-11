# About
The Price Tracker app is a web application built with Next.js that utilizes Bright Data (formerly Luminati) for web scraping Amazon product pages. It allows users to track prices of specific products by inputting Amazon URLs and displays the scraped details directly on the console.

# Features
Web Scraping with Bright Data: Utilizes Bright Data for fetching real-time data from Amazon, including product title, current price, and original price.
Console Display: Displays the scraped product details (title, current price, original price) directly on the console.
Next.js Framework: Built with Next.js, offering server-side rendering and React framework benefits.
Carousel Component: Enhances the user interface with a carousel for displaying product images or additional details.

# Usage
Open the app in your web browser (http://localhost:3000).
Input an Amazon product URL into the provided form field and submit.
The app will use Bright Data to scrape the specified product page on Amazon.
Scrape results (product title, current price, original price) will be displayed on the console.
Navigate through product images or related details using the carousel component.
Refresh the page or input a new URL to fetch updated price information.

# Bright Data 
Bright Data is a proxy service provider that enables ethical web scraping by routing requests through a vast pool of residential IPs. This ensures reliability, anonymity, and compliance with web scraping regulations.
Credentials: Obtain valid Bright Data credentials including proxy IP, port, username, and password.
Configuration: Ensure your Bright Data account is configured to handle web scraping tasks and that the proxy settings in your environment are correctly set.

# Notes
Console Display: As designed, the app outputs scraped data to the console only. This is useful for debugging, monitoring, or integrating with other systems that consume console output.
Customization: Modify the app to suit specific requirements such as saving data to a database, integrating with other APIs, or enhancing the user interface.
Legal Compliance: Respect Amazon's terms of service and comply with all applicable laws and regulations regarding web scraping and automated access to websites.
