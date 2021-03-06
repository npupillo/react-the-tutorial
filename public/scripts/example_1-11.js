var data = [
  {author: "Snoopy", text: "This is one STATIC JSON DATA comment"},
  {author: "Linus", text: "This is *another* STATIC JSON DATA comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className = "commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      )
    }); //end commentNodes
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
        I am a CommentForm.
      </div>
    )
  }
});

React.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
