import React, { Component } from 'react';
import faker from 'faker/locale/zh_TW';

const Albums = [
	{
		name:'Mars',
		Author:'Tyko',
		songs: []
	},
	{
		name:'I have a dream',
		Author:'M.K',
		songs:[],
	},
	{
		name:'Cheer!',
		Author:'Train',
		songs:[],
	},
	{
		name:'Road to the Sea',
		Author:'Maria',
		songs:[],
	}
];

for(let i=0; i<4; ++i) {
	for(let j=0; j<8; ++j) {
		Albums[i].songs.push ( {
			name:faker.lorem.words(),
			playing:false,
		})
	}
}
export default Albums 