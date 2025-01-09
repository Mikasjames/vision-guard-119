export interface MotivationalMessage {
    title: string;
    content: string;
    icon: string;
}

export interface Text {
    text: string;
}

export interface TextAuthor extends Text {
    author: string;
}

export interface TextIcon extends Text {
    icon: string;
}