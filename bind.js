// the() method creates a new function whose this keyword refers to the provided value, with a given sequence of arguement


var lang = "JavaScript";
 function lang_name(call)
{
      call();
};
  var obj={
      lang:"JavaScript",
  language:function()
  {
    console.log(this.lang+ " is a popular programming language.");
  }
};
lang_name(obj.language);
lang_name(obj.language.bind(obj));