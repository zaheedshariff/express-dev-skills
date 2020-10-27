         <h2>Delete a Skill</h2>
        <form action="/skills/<%= s.id %>?_method=DELETE" class="delete-form" method="POST">
          <button type="submit">X</button>
        </form>

            <% skills.forEach(function(s) { %>
    <h1>Skills: <%= skills.id %></h1>
    <% }) %>