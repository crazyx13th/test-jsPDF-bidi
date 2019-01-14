document.getElementById("generate-pdf").addEventListener("click", getPDF);

function getPDF() {

    let doc = new jsPDF();

    doc.addFileToVFS("TTWPGOTT.ttf", window.TTWPGOTT);
    doc.addFont('TTWPGOTT.ttf', 'TTWPGOTT', 'normal');

    doc.setFont('TTWPGOTT', 'normal');
    doc.setFontSize(10);
    doc.setR2L(true);

    let maxWidth = 100;
    let text02 = '1. הספק הגיש הצעה ללקוח לאספקת שירותי מחשוב בשיטת מיקור חוץ (Outsourcing), תוך בחינת המערכות הקימות ודרישות הלקוח ובדיקת ההתאמות הדרושות להטמעת דרישות אלה במערכת, ועל בסיס מסמך האפיון שהגיש הלקוח (להלן "המפרט");';

    let lines = doc.splitTextToSize(text02, maxWidth);

    doc.text(lines, 100, 10, {align: 'left'});

    doc.save();
}