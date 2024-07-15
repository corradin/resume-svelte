export interface IProfileResp {
	intro: IIntro;
	summary: string;
	projects: IProject[];
	achievements: Achievement[];
	passions: Passion[];
	technologies: Technology[];
	workExperiences: WorkExperience[];
	educations: Education[];
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
	details: { coreCompetency?: string; descriptions: string }[];
};

export type Education = {
	degree: string;
	institution: string;
	url: string;
	location: string;
	years: string[];
};

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
