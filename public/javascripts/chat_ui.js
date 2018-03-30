function divEscapedContentElement(message) {
  return $('<div></div>').text(message);
}

function divSystemContentElement(messsage) {
  return $('<div></div>').html('<i>' + message + '</i>');
}