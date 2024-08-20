import { Picture } from '@/model/Picture';
import { Story } from '@/model/Story';
import { atom } from 'recoil';

export const storyState = atom<Story>({
    key: "storyState",
    default: {
        title: "",
        story: [{
            title: "",
            content: ""
        }],
    }
});

export const pictureState = atom<Picture[]>({
    key: "pictureState",
    default: [

    ]
})

export const characterState = atom({
    key: "characterState",
    default: ""
})

export const themeState = atom({
    key: "themerState",
    default: ""
})

export const backgroundState = atom({
    key: "backgroundState",
    default: ""
})