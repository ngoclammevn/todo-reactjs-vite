## MODIFIED Requirements

### Requirement: Confirm delete popup message
The confirm delete popup SHALL display the message: "Are you want to delete this task?"

#### Scenario: User attempts to delete a todo
- GIVEN the user clicks the delete button on a todo item
- WHEN the confirm delete popup appears
- THEN the popup displays the message: "Are you want to delete this task?"
