// script.js
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'resume.pdf' with the actual path to your resume file
    var fileUrl = 'Elexis Falceso Resume CV.pdf (1)';
    
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Elexis Falceso Resume CV.pdf (1)';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  