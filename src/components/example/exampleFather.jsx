import React from 'react'
import jsPDF from 'jspdf'
import './example.css'

export default function ExampleFather() {

    const generatePDF = () => {
        var doc = new jsPDF("p", "pt", "a4")
        doc.html(document.querySelector("#content"),{
            callback: function(pdf){
                pdf.save("transacrion.pdf")
            }
        })
    }

    return (
        <div className='example'>
            <div id="content">
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
