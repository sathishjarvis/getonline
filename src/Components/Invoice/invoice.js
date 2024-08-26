import React from 'react';
import './invoice.css'

const Invoice = React.forwardRef(({data}, ref) => {


    return (
        <div ref={ref}>
            <div class="invoice" id="invoicepdf">
                <header>
                    <h6>TAX INVOICE</h6>
                    <div class="company-details">
                        <h1>M/S SRI SUN FARMS</h1>
                        <p>Auroville Main Road, Near AML, Auroville - 6050101.</p>
                        <p>Ph. No: 0413 2969364</p>
                        <p>GSTIN: 33GKUPP149D1ZY</p>
                        <p>E-Mail: sunfarm50@gmail.com</p>
                    </div>
                </header>
                <hr />
                <section class="buyer-details">
                    <div class="buyer-info">
                        <p><strong>Buyer Details</strong></p>
                        <p><strong>To:</strong> M/S <span id="buyerName"></span></p>
                        <p><strong>Address:</strong> <span id="buyerAddress"></span></p>
                    </div>
                    <div class="invoice-info">
                        <p>Invoice No: SSF 24-25/004</p>
                        <p>Invoice Date: <span id="todayDate"></span></p>
                    </div>
                </section>
                <hr />
                <table id="invoice-table">
                    <thead>
                        <tr>
                            <th>SL No.</th>
                            <th>item name</th>
                            <th>HSN/SAC Code</th>
                            <th>Quantity</th>
                            <th>price ₹</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody id="invoice-body">
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.Address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3 id="grand-total">Grand Total: $0</h3>
            </div>
        </div>
    );
});

export default Invoice;
