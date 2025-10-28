export const config = {
    baseUrl: 'https://www.service.nsw.gov.au/transaction/check-motor-vehicle-stamp-duty',
    purchase_price: 5000.00,
    get duty_payable() {
        return this.purchase_price * 3/100;
    },
};