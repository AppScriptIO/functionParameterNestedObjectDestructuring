export function runManagerAppInContainerWithClientApp(input) {
    // use nested objects as function parameters - an implementation of destructuring that preserves nested structure of parameters and default values.
    // TODO: Issue - doesn't throw if parameters not passed.
    let application = {}, managerApp = {}, invokedDirectly;
    ({
        application: {
            hostPath: application.hostPath, // the Windows host application path
            configuration: application.configuration,
            pathInContainer: application.pathInContainer = application.configuration.directory.application.containerAbsolutePath || containerPath.application
        },
        // as default the managerApp should be installed (i.e. expected to be a dependency) as a dependency in a nested folder to the application.
        managerApp: {
            hostRelativePath: managerApp.hostRelativePath,
            commandArgument: managerApp.commandArgument = process.argv,
        },
        invokedDirectly = false
    } = input) // destructure nested objects to the object properties themselves.
  
  
  console.log(application.hostPath)

}


// Invocation
    runManagerAppInContainerWithClientApp({
        application: {
            hostPath: configuration.directory.application.hostAbsolutePath, 
            configuration: configuration
        },
        managerApp: {
            hostRelativePath: managerAppHostRelativePath
        },
        invokedDirectly: (require.main === module) ? true : false
    })
