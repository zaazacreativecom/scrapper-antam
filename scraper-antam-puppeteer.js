const puppeteer = require("puppeteer");

const URL = "https://www.logammulia.com/id/harga-emas-hari-ini";

async function getHargaAntam() {
  let browser;
  try {
    console.log("🚀 Membuka browser...");
    browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set user agent
    await page.setUserAgent(
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    );

    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });

    console.log("📡 Mengakses website...");
    await page.goto(URL, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // Tunggu table muncul
    await page.waitForSelector("table tbody tr", { timeout: 10000 });

    console.log("📊 Mengambil data harga...");

    // Extract data dari table pertama saja (hanya 12 baris pertama - emas batangan ANTAM)
    const result = await page.evaluate(() => {
      const firstTable = document.querySelector("table");
      if (!firstTable) return [];

      const rows = firstTable.querySelectorAll("tbody tr");
      const data = [];
      let count = 0;

      rows.forEach((row) => {
        if (count >= 12) return; // Batasi hanya 12 baris pertama

        const cells = row.querySelectorAll("td");
        if (cells.length >= 2) {
          const berat = cells[0].textContent.trim();
          const harga = cells[1].textContent.trim();

          if (berat && harga) {
            data.push({ berat, harga });
            count++;
          }
        }
      });

      return data;
    });

    if (result.length > 0) {
      console.log("\n✅ Harga Emas ANTAM Hari Ini:\n");
      console.table(result);
    } else {
      console.log("⚠️ Tidak ada data yang ditemukan");
    }
  } catch (error) {
    console.error("❌ Gagal ambil data:", error.message);
  } finally {
    if (browser) {
      await browser.close();
      console.log("\n🔒 Browser ditutup");
    }
  }
}

getHargaAntam();
