import React, { useRef } from "react";
import jsPDF from 'jspdf'
import './example.css'

export default function ExampleFather() {
    const pdfFile = useRef();
    const generatePDF = () => {
        try {
            var doc = new jsPDF("p", "pt", "a4")
            doc.html(pdfFile.current, {
                callback: function (pdf) {
                    pdf.save("transaction.pdf")
                }
            })
        } catch (error) {
            console.log(error)
        }
        console.log(pdfFile.current)
    }

    return (
        <div className='example'>
            <div ref={pdfFile} id="contenttttttt">
                <p>
                    Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Tempora hic
                    sapiente ipsa non possimus quam debitis! Vero non at quaerat.
                </p>
            </div>
            <button onClick={generatePDF}>Generate document</button>
        </div>
    )
}
