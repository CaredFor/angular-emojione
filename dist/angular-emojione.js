import { Component, Injectable, Input, NgModule, Pipe } from '@angular/core';
import { shortnameToImage, toImage, toShort, unicodeToImage } from 'emojione';
import * as EmojiOne from 'emojione';

class EmojiService {
    constructor() { }
    /**
     * Convert a shortname, like :thumbsup:, to an EmojiOne image.
     *
     *
     * \@memberOf EmojiService
     * @param {?} shortname
     * @return {?}
     */
    shortnameToImage(shortname) {
        return shortnameToImage(shortname);
    }
    /**
     * Convert a native unicode emoji to a shortname
     *
     *
     * \@memberOf EmojiService
     * @param {?} unicode
     * @return {?}
     */
    unicodeToShortname(unicode) {
        return toShort(unicode);
    }
    /**
     * Convert a native unicode emoji to an EmojiOne image
     *
     *
     * \@memberOf EmojiService
     * @param {?} unicode
     * @return {?}
     */
    unicodeToImage(unicode) {
        return unicodeToImage(unicode);
    }
    /**
     * Replace shortcodes and/or native emoji in a blob of text to EmojiOne images
     *
     *
     * \@memberOf EmojiService
     * @param {?} text
     * @return {?}
     */
    convertText(text) {
        return toImage(text);
    }
}
EmojiService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
EmojiService.ctorParameters = () => [];

class EmojiPipe {
    /**
     * @param {?} emojiService
     */
    constructor(emojiService) {
        this.emojiService = emojiService;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    transform(text) {
        return this.emojiService.convertText(text);
    }
}
EmojiPipe.decorators = [
    { type: Pipe, args: [{
                name: 'emoji'
            },] },
];
/**
 * @nocollapse
 */
EmojiPipe.ctorParameters = () => [
    { type: EmojiService, },
];

class EmojiComponent {
    /**
     * @param {?} emojiService
     */
    constructor(emojiService) {
        this.emojiService = emojiService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.image = this.emojiService.shortnameToImage(this.shortname);
    }
}
EmojiComponent.decorators = [
    { type: Component, args: [{
                selector: 'emoji',
                template: `
    <span [innerHTML]="image"></span>
  `
            },] },
];
/**
 * @nocollapse
 */
EmojiComponent.ctorParameters = () => [
    { type: EmojiService, },
];
EmojiComponent.propDecorators = {
    'shortname': [{ type: Input },],
};

class EmojiModule {
}
EmojiModule.decorators = [
    { type: NgModule, args: [{
                providers: [EmojiService],
                declarations: [
                    EmojiPipe,
                    EmojiComponent
                ],
                exports: [
                    // Export directives, components, and pipes here
                    EmojiPipe,
                    EmojiComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
EmojiModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { EmojiModule, EmojiService, EmojiPipe, EmojiComponent as ɵa };
