"""Intel公式比較PDFの表を抽出する。依存: pdfplumber。入力PDFは変更しない。"""
import json
import sys

import pdfplumber

with pdfplumber.open(sys.argv[1]) as document:
    pages = [
        {"page": index + 1, "tables": page.extract_tables()}
        for index, page in enumerate(document.pages)
    ]
with open(sys.argv[2], "w", encoding="utf-8") as output:
    json.dump(pages, output, ensure_ascii=False)
