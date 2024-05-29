export interface IProfileResp {
	intro: IIntro;
	summary: string;
	projects: IProject[];
	achievements: Achievement[];
	passions: Passion[];
	technologies: Technology[];
	workExperiences: WorkExperience[];
	educations: IEducation[];
	resumeUrl: {
		sourceLink: string;
		fullVersionLink: string;
	};
}
export interface IIntro {
	name: string;
	nickname: string;
	phone: string;
	email: string;
	github: string;
	linkedin: string;
	location: string;
	website: string;
}

export interface IProject {
	name: string;
	details: string;
	url: string;
	hide: boolean;
}

export type Technology = {
	section: string;
	details: string[];
};

export type WorkExperience = {
	position: string;
	company: string;
	url: string;
	years: string[];
	location: string;
	details: string[];
};

export interface IEducation {
	head: string;
	details: string;
}

export type Achievement = {
	title: string;
	description: string;
	icon?: string;
};

export type Passion = {
	title: string;
	description: string;
	icon?: string;
};
