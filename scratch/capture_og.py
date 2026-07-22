import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        # 1200x630 is the recommended Open Graph image size
        context = await browser.new_context(viewport={'width': 1200, 'height': 630})
        page = await context.new_page()
        
        # Load the deployed website
        await page.goto("https://robj1925.github.io/sharkunlock-website/", wait_until="networkidle")
        
        # Hide the intake form at the bottom if it gets in the way of a nice screenshot,
        # but since we are capturing the top 630px, we should only see the Hero section, which is perfect.
        
        # Wait a bit for animations or images to load fully
        await page.wait_for_timeout(2000)
        
        # Take a screenshot of the viewport
        await page.screenshot(path="public/opengraph-image.png")
        await page.screenshot(path="public/twitter-image.png")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
