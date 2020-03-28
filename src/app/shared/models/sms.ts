export interface SmsCal {
	id_len?: number;
	msg_cnt?: number;
	wrd_cnt?: number;
}

export interface SmsMessage {
	sender_id: string;
	recipients: string[] | string;
	message: string;
	shouldQueue?: boolean;
	minutes?: number;
	hours?: number;
}
