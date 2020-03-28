export interface AdminNav {
	title: string;
	uri?: string | any[];
	params?: any[];
	dropId?: string;
	dropNav?: AdminNav[];
}
