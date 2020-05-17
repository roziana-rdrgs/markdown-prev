import React, { Component } from "react";
import "./App.css";

class App extends Component {

    state = {
        rawInput: `
# Markdown Previewer
### Developed by Roziana Rodrigues
## FreeCodeCamp | Front End Libraries Projects

A *FreeCodeCamp* challenge on using front end libraries to build a markdown previewer with the below user stories to be fulfilled:

> **Required**
> 1. I can see a \`textarea\` element with a corresponding \`id="editor"\`.
> 2.  I can see an element with a corresponding \`id="preview"\`.
> 3. When I enter text into the \`#editor\` element, the \`#preview\` element is updated as I type to display the content of the textarea.
> 4. When I enter GitHub flavored markdown into the \`#editor\` element, the text is rendered as HTML in the \`#preview\` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).
> 5. When my markdown previewer first loads, the default text in the \`#editor\` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
> 6. When my markdown previewer first loads, the default markdown in the \`#editor\` field should be rendered as HTML in the \`#preview\` element.

> **Optional Bonus**
> 1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).
> 2. When I click a link rendered by my markdown previewer, the link is opened up in a new tab (HINT: read the Marked.js docs for this one!).

---

\`\`\`

// CODE BLOCK SAMPLE
<!DOCTYPE html>                       
<html class="no-js" lang="">                           
<head>                               
  <meta charset="utf-8">                               
  <meta http-equiv="x-ua-compatible" content="ie=edge"> 
    
    <title></title>              
                 
  <meta name="description" content="">                         
  <meta name="viewport" content="width=device-width, initial- scale=1, shrink-to-fit=no">
 <link rel="stylesheet" href="css/main.css">
</head>   
                       
 <body>            
                  
   <p>Hello world! This is HTML5 Boilerplate.</p>          
     <script src="js/vendor/modernizr-{{MODERNIZR_VERSION}}.min.js>
     </script>

 </body>
</html>

\`\`\`

---


    `,
    };
    onChange(raw) {
        this.setState({ rawInput: raw });
    }

    render() {
        window.marked.setOptions({
            breaks: true,
        });

        return ( <
            div className = "App" >
            <
            div className = "container" >
            <
            textarea name = "editor"
            id = "editor"
            value = { this.state.rawInput }
            onChange = {
                (e) => this.onChange(e.target.value) }
            />{" "} <
            /div> <
            article className = "container" >
            <
            div className = "preview"
            id = "preview"
            dangerouslySetInnerHTML = {
                {
                    __html: window.marked(this.state.rawInput),
                }
            }
            />{" "}

            <
            /article>{" "} <
            /div>
        );
    }
}

export default App;