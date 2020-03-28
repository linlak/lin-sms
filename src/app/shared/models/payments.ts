export interface InitPay {
	sms_count?: number | '';
	pay_now?: boolean;
	p_phone?: string;
}
export interface CurPay {
	payment: SmsPayment;
}
export interface SmsPayment {
	curpay?: CurPay;
}
