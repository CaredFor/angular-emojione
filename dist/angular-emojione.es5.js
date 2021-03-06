import { Component, Injectable, Input, NgModule, Pipe } from '@angular/core';
import { shortnameToImage, toImage, toShort, unicodeToImage } from 'emojione';
import * as EmojiOne from 'emojione';

var EmojiService = /** @class */ (function () {
    function EmojiService() {
    }
    /**
     * Convert a shortname, like :thumbsup:, to an EmojiOne image.
     *
     *
     * \@memberOf EmojiService
     * @param {?} shortname
     * @return {?}
     */
    EmojiService.prototype.shortnameToImage = function (shortname) {
        return shortnameToImage(shortname);
    };
    /**
     * Convert a native unicode emoji to a shortname
     *
     *
     * \@memberOf EmojiService
     * @param {?} unicode
     * @return {?}
     */
    EmojiService.prototype.unicodeToShortname = function (unicode) {
        return toShort(unicode);
    };
    /**
     * Convert a native unicode emoji to an EmojiOne image
     *
     *
     * \@memberOf EmojiService
     * @param {?} unicode
     * @return {?}
     */
    EmojiService.prototype.unicodeToImage = function (unicode) {
        return unicodeToImage(unicode);
    };
    /**
     * Replace shortcodes and/or native emoji in a blob of text to EmojiOne images
     *
     *
     * \@memberOf EmojiService
     * @param {?} text
     * @return {?}
     */
    EmojiService.prototype.convertText = function (text) {
        return toImage(text);
    };
    EmojiService.decorators = [
        { type: Injectable },
    ];
    /**
     * @nocollapse
     */
    EmojiService.ctorParameters = function () { return []; };
    return EmojiService;
}());

var EmojiPipe = /** @class */ (function () {
    /**
     * @param {?} emojiService
     */
    function EmojiPipe(emojiService) {
        this.emojiService = emojiService;
    }
    /**
     * @param {?} text
     * @return {?}
     */
    EmojiPipe.prototype.transform = function (text) {
        return this.emojiService.convertText(text);
    };
    EmojiPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'emoji'
                },] },
    ];
    /**
     * @nocollapse
     */
    EmojiPipe.ctorParameters = function () { return [
        { type: EmojiService, },
    ]; };
    return EmojiPipe;
}());

var EmojiComponent = /** @class */ (function () {
    /**
     * @param {?} emojiService
     */
    function EmojiComponent(emojiService) {
        this.emojiService = emojiService;
    }
    /**
     * @return {?}
     */
    EmojiComponent.prototype.ngOnInit = function () {
        this.image = this.emojiService.shortnameToImage(this.shortname);
    };
    EmojiComponent.decorators = [
        { type: Component, args: [{
                    selector: 'emoji',
                    template: "\n    <span [innerHTML]=\"image\"></span>\n  "
                },] },
    ];
    /**
     * @nocollapse
     */
    EmojiComponent.ctorParameters = function () { return [
        { type: EmojiService, },
    ]; };
    EmojiComponent.propDecorators = {
        'shortname': [{ type: Input },],
    };
    return EmojiComponent;
}());

var EmojiModule = /** @class */ (function () {
    function EmojiModule() {
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
    EmojiModule.ctorParameters = function () { return []; };
    return EmojiModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { EmojiModule, EmojiService, EmojiPipe, EmojiComponent as ɵa };
