import util from './util';
import Store from '../api/store/index';

let note = {};
let store = new Store(util.platform);

note.getNote = async function(id){
	console.log('getNote');
	return await store.readFile(`/note-${id}.md`);
};

note.addNote = async function(note){
	note.content = '# Untitled Note';
	return await this.saveNoteContent(note);
};

note.saveNoteContent = async function(note, shouldThrottle){
	return await store.writeFile(`/note-${note.id}.md`,note.content);
};

note.initData = async function(id){
	var content = `# 欢迎使用TooNote\n\nTooNote是一款基于Markdown的笔记软件。`;
	return await store.writeFile(`./note-${id}.md`,content);
};

export default note;