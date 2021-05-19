function printBanner(bannerText)
{
    console.log("-".repeat(bannerText.length + 4));
    console.log("- " + bannerText + " -");
    console.log("-".repeat(bannerText.length + 4));
}

printBanner(process.argv[2]);
