export enum DockerContainerDialogMode {
    CREATE,
    EDIT,
    VIEW
}

export enum DockerContainerStatus {
    EXITED,
    RUNNING
}

export enum DockerContainerAction {
    START,
    RESTART,
    EXIT
}

export interface DockerContainerDialogProps {
    mode : DockerContainerDialogMode,

}

export interface DockerContainerProps {
    name : string,
    imageName ?: string,
    imageHash ?: string,
    status : DockerContainerStatus,
    ports : string[],
    started : string,
    action : DockerContainerAction
}