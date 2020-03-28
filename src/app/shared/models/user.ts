export declare type Gender = 'male' | 'female' | '';

interface AbstractUser {
	id?: number | string;
	username?: string;
	password?: string;
	avatar?: string;
	country?: string;
	reg_date?: string;
	last_seen?: string;
	gender?: Gender;
	phone?: string;
	email?: string;
	name?: string;
	fullname?: string;
	full_name?: string;
	current_password?: string;
	created_at?: string;
}

export interface User extends AbstractUser {
	mbr?: string;
	recovery_token?: string;
	password_confirmation?: string;
	sms?: number | any[] | '';
	terms?: boolean;
	email_verified?: boolean;
	phone_verified?: boolean;
	status?: string;
	user_role?: string;
	has_sms?: boolean;
	sms_count?: number;
	isUsable?: boolean;
	reason?: boolean;
	isUser?: boolean;
	apps?: any[];
	domains?: any[];
	payments?: any[];
	tokens?: any[];
}

export interface LogedInUser extends User {
	isAdmin: boolean;
	sms: number;
}
