context("Test API routes", () => {
	it("should load homepage on development server", () => {
		cy.visit("http://localhost:3000/");
		cy.get("h1").should("contain", "GetUp Task");
		cy.get("h2").should("contain", "Products");
		cy.get("h2").should("contain", "100 Posts");
	});

	it("should load homepage on production server", () => {
		cy.visit("https://getup-task.vercel.app/");
		cy.get("h1").should("contain", "GetUp Task");
		cy.get("h2").should("contain", "Products");
		cy.get("h2").should("contain", "100 Posts");
	});

	it("should load posts", () => {
		cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.length(100);
		});
	});

	it("should load post no 1", () => {
		cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1").then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property("id", 1);
			expect(response.body).to.have.property("userId", 1);
		});
	});

	it("should load user no 1", () => {
		cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").then((response) => {
			expect(response.status).to.eq(200);
			console.log(response.body);
			expect(response.body).to.have.property("id", 1);
			expect(response.body).to.have.property("name", "Leanne Graham");
			expect(response.body).to.have.property("username", "Bret");
			expect(response.body).to.have.property("email", "Sincere@april.biz");
			expect(response.body).to.have.property("address");
			expect(response.body).to.have.property("phone", "1-770-736-8031 x56442");
			expect(response.body).to.have.property("website", "hildegard.org");
			expect(response.body).to.have.property("company");
		});
	});
});
