function deleteIt(taskId)
{
    console.log("delete", taskId);
    const url = "http://127.0.0.1:3003/tasks/" + taskId;
    console.log(url);

    fetch(url, { method:"DELETE" });

    location.reload();
}

function completeIt(taskId)
{
    doSomething(taskId, true);
}

function undoIt(taskId)
{
    doSomething(taskId, false);
}

function doSomething(taskId, completed)
{
    const target = completed ? "completed" : "undo";

    const url = "http://127.0.0.1:3003/tasks/" + taskId + "/" + target;
    console.log(url);

    fetch(url, { method:"PATCH" });

    location.reload();
}