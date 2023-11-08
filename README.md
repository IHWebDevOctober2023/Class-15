# LAB Rick and Morty - Mongoose Relationships

- Now that we have all the episodes and characters we need to create the relationships between them. 
- In this case is a many-to-many relationship. (a character has many episodes and an episode can have many characters)
- We need to create the GET route to render the form in "/". You can create it in the index.routes. 
- We need to find ALL the character names and ALL the episode titles. Uff.. that's a lot of PROMISES combined... I wonder if there is a method to solve them ALL in once.
- Create the form. This form is to POST a character into the EPISODES array and vice versa:

```html
<h1>Add the character to the episode:</h1>
<form action="/character/add-to-episode" method="THE METHOD HERE">
    <label for="character">Select the character</label>
    <select name="characterId">
       {--! HERE WE ARE GOING TO DISPLAY ONE OPTION FOR EACH CHARACTER --}
        <option value="THE ID OF EACH CHARACTER HERE">THE NAME OF EACH CHARACTER HERE</option>
     
    </select>
    <label for="episode">Select the episode</label>
    <select name="episodeId">
     {--! HERE WE ARE GOING TO DISPLAY ONE OPTION FOR EACH EPISODE --}
        <option value="THE ID OF EACH EPISODE HERE">THE TITLE OF EACH EPISODE HERE</option>
    
    </select>
    <button type="submit">Submit</button>
</form>
```

- Once we have the form we need to create this POST route with the route included in the "action" attribute for the form. You can create it in the index.routes file. Again, a lot of promises combined...
- To add a relationship between different documents we need the ID's right??? I wonder if we have access to them... You'll need to move your hands and BODY :face_with_rolling_eyes: to code the solution (oh no Marcel, that's a terrible joke:expressionless:)
- Remember that mongoose has a method to push something to an array $push:
- Display a Success page