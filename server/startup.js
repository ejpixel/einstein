Meteor.startup(function () {
	//insere usuário padrão
	if(!Meteor.users.find().count()) {
		var user = {
			username: 'admin',
			password: 'admin'
		};
		Accounts.createUser(user);
	}
	//insere alunos dummy
	if(!Alunos.find().count()) {
		var aluno1 = {
			matricula: 123456,
			nome: 'Fulano de tal',
			idade: 19,
			foto: 'http://img02.deviantart.net/33cf/i/2007/277/6/4/student_dude_by_sketchoo.jpg'
		};
		Alunos.insert(aluno1);
		var aluno2 = {
			matricula: 123123,
			nome: 'Asdrubal',
			idade: 19,
			foto: 'http://www.featurepics.com/StockImage/20071008/skate-dude-stock-illustration-480419.jpg'
		};
		Alunos.insert(aluno2);
		var aluno3 = {
			matricula: 456789,
			nome: 'Aluno de computação',
			idade: 19,
			foto: 'http://cdn.productivemuslim.com/wp-content/uploads/2010/08/student-sleeping-on-books-ProductiveMuslim.jpg'
		};
		Alunos.insert(aluno3);
	}
	//insere professor dummy
	if(!Professores.find().count()) {
		var professor = {
			cpf: 123123123,
			nome: 'Fessor',
			idade: 152
		};
		Professores.insert(professor);
	}
	//insere matricula dummy
	if(!Matriculas.find().count()) {
		var matricula1 = {
			turmaId: 147258,
			alunoId: 123123
		};
		var matricula2 = {
			turmaId: 147258,
			alunoId: 456789
		};
		var matricula3 = {
			turmaId: 147258,
			alunoId: 123456
		};
		var matricula4 = {
			turmaId: 147259,
			alunoId: 456789
		};
		var matricula5 = {
			turmaId: 147259,
			alunoId: 123456
		};
		Matriculas.insert(matricula1);
		Matriculas.insert(matricula2);
		Matriculas.insert(matricula3);
	}
	//insere chamada dummy
	if(!Chamadas.find().count()) {
		var chamada1 = {
			chamadaId: 1,
			turmaId: 147258,
			alunoId: 123123,
			data: new Date(),
			presente: 0
		};
		var chamada2 = {
			chamadaId: 2,
			turmaId: 147258,
			alunoId: 123456,
			data: new Date(),
			presente: 0
		};
		var chamada3 = {
			chamadaId: 3,
			turmaId: 147259,
			alunoId: 123456,
			data: new Date(),
			presente: 0
		};
		var chamada4 = {
			chamadaId: 4,
			turmaId: 147259,
			alunoId: 123456,
			data: new Date(),
			presente: 0
		};
		Chamadas.insert(chamada1);
		Chamadas.insert(chamada2);
		Chamadas.insert(chamada3);
		Chamadas.insert(chamada4);
	}
});
