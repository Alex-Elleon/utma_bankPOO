//Solicitar
//Pagar
//Mostrar prestamo
//Mostrar prestamos
//Validar usuario
import LoanModel from "../models/LoanModel.js";
import PaymentModel from "../models/PaymentsModel";
class LoanManager{
    constructor(
        userId,
        loanType,
        amount,
        interestRate,
        numberPayments,
        startDate,
        endDate,
        status
    ){
        this.userId = userId
        this.loanType = loanType
        this.amount = amount
        this.interestRate = interestRate
        this.numberPayments = numberPayments
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
    }

    async createLoan(){
        try {
            const loan = await LoanModel.create({

                userId:this.userId,
                loanType:this.loanType,
                amount:this.amount,
                interestRate:this.interestRate,
                numberPayments:this.numberPayments,
                startDate:this.startDate,
                endDate:this.endDate,
                status:this.status
            });
            return loan;
        } catch (error) {
            throw new Error(`Error al crear la fecha de expiracion de la tarjeta: ${error}`);
        }
    }

    async payLoan(
        loanId,
        mount,
        numberPayment){
            try {
                const payment = await PaymentModel.create({
                    userId,
                    loanId,
                    amount,
                    numberPayment
                });
                return payment;
            } catch (error) {
                throw new Error(`Error al intentar pagar: ${error}`);
            }
    }

    async getLoan(id){
        try {
            const loan = await LoanModel.findById(id);
            return loan;
        } catch (error) {
            throw new Error(`Error al obtener el prestamo: ${error}`);
        }
        }

        async getLoans(id){
            try {
                const loans = await LoanModel.findById(id);
                return loans;
            } catch (error) {
                throw new Error(`Error al obtener el prestamo: ${error}`);
            }
            }

            async

}