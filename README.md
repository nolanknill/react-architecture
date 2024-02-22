# React Review

    - Components
    
    - JSX
        - Combining HTML and JavaScript
        - ❌ DOM 
        - UI
        - reserved JavaScript words: htmlFor, className
        - inputs/imgs must be self-closing
        - only return one element, no multiple siblings being returned!
        - Fragment <> <h1></h1><div></div> </>
        - <h1>{pageTitle}</h1>
    
    - Props
        - parameters / arguments
    
    - State
        - hooks
    
    - Event Handlers

```
function Contestant() {
    const [activeId, setActiveId] = useState(1);

    function handleClick() {
        setActiveId(activeId + 1)
    }

    return (
        <h1 onClick={handleClick}>Active ID {activeId}</h1>
    )
}
```


## Planning

- Components
    - App
        - state: activeContestant
        import contestants.json
        - ```
            function updateActiveContestant ( id ) {
              setActiveContestant
            }
        ```

        -ContestantsList
          prop: contestants - array
          prop: activeContestant
          prop: updateActiveContestant
            
            ContestantNavItem
              prop: id
              prop: name
              prop: image
              prop: updateActiveContestant
              prop: isActive
              onClick = updateActiveContestant

        ContestantDetails
          simpler prop: contestant
          prop: name
          prop: season
          prop: age
          prop: rating
          prop: image

```
function ContestantDetails( {contestant} ) {
    const { name, age, rating, image, season } = contestant;

}
```