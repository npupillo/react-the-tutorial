var data = [
  {author: "Snoopy", text: "This is one STATIC JSON DATA comment"},
  {author: "Linus", text: "This is *another* STATIC JSON DATA comment"}
];

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.props.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      )
    }); //end commentNodes
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var Comment = React.createClass({displayName: "Comment",
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      React.createElement("div", {className: "comment"}, 
        React.createElement("h2", {className: "commentAuthor"}, 
          this.props.author
        ), 
          React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}, 
        "I am a CommentForm."
      )
    )
  }
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);
