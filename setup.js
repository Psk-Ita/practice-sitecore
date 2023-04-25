#!/usr/bin/env node
require('dotenv').config();
const auth = require ('./lib/setupscripts/auth');
const mediaAPI =require('./lib/setupscripts/mediaUploadAPI');
const serialize =require('./lib/setupscripts/serialize');
const media = require('./lib/setupscripts/media');
const color = require('./lib/setupscripts/colorConstants');
const constants = require('./lib/setupscripts/constants');
const cmd = require('./lib/setupscripts/cmd');


const client_id = process.env.SITECORE_CLIENT_ID;
const client_secret = process.env.SITECORE_CLIENT_SECRET;

startSetup();

async function startSetup(){
    // authenticate
    var client;
    var exists;
    if (client_id != null && client_secret != null ) {
        client = await auth.authenticate(client_id,client_secret);
    } else {
        console.log(color.WARNING,'clientId or clientsecret not properly set in constants file: ' + client_id + ' ### ' + client_secret);
    }
    if (client == null) {
        console.log(color.WARNING,'No Client retrieved')
        return;
    } 

    const token = await auth.authenticateAPI(client_id, client_secret);

    // Create Media Assets and Media Items
    console.log('');
    console.log(color.INFO,'Step 1/3: Create Media Assets');
    // avanade-logo
    exists = await media.mediaItemExists(client, 'Ie9liSKkdU6Z0YPLyyqM7w');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'avanade-logo.png', //fileName
                            'image/png', //fileType
                            '13213', //fileSize
                            'Ie9liSKkdU6Z0YPLyyqM7w', //Media Item Id: leave empty when not needed, e.g. ''
                            'Avanade Logo',//Media Item Name.
                            'Sustainable Business, Digital & Cloud Services | Avanade'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: Ie9liSKkdU6Z0YPLyyqM7w');
    } else {
        console.log(color.WARNING,'Media Item Ie9liSKkdU6Z0YPLyyqM7w already exists');
    }
    
    exists = await media.mediaItemExists(client, 'v0_sPIYpUk-iyk6uDSNXpg');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'background.jpg', //fileName
                            'image/jpeg', //fileType
                            '52567', //fileSize
                            'v0_sPIYpUk-iyk6uDSNXpg', //Media Item Id: leave empty when not needed, e.g. ''
                            'background',//Media Item Name.
                            'background'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: v0_sPIYpUk-iyk6uDSNXpg');
    } else {
        console.log(color.WARNING,'Media Item v0_sPIYpUk-iyk6uDSNXpg already exists');
    }

    // logo - footer
    exists = await media.mediaItemExists(client, 'CJPzBClookmTYzw2p1ZO1g');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'avanade-logo-footer.png', //fileName
                            'image/png', //fileType
                            '13213', //fileSize
                            'CJPzBClookmTYzw2p1ZO1g', //Media Item Id: leave empty when not needed, e.g. ''
                            'Avanade Logo',//Media Item Name.
                            'Sustainable Business, Digital & Cloud Services | Avanade'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: CJPzBClookmTYzw2p1ZO1g');
    } else {
        console.log(color.WARNING,'Media Item CJPzBClookmTYzw2p1ZO1g already exists');
    }

    // footer - waves
    exists = await media.mediaItemExists(client, 'cfaPFlonrU24wSy3S6lD1g');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'avanade-footer-waves.png', //fileName
                            'image/png', //fileType
                            '26502', //fileSize
                            'cfaPFlonrU24wSy3S6lD1g', //Media Item Id: leave empty when not needed, e.g. ''
                            'waves',//Media Item Name.
                            'footer'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: cfaPFlonrU24wSy3S6lD1g');
    } else {
        console.log(color.WARNING,'Media Item cfaPFlonrU24wSy3S6lD1g already exists');
    }

    
    // articles 
        // #1
    exists = await media.mediaItemExists(client, 'cBH2Fdqi80eQGfHBcfIuiA');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art1.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'cBH2Fdqi80eQGfHBcfIuiA', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #1',//Media Item Name.
                            'article #1 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: cBH2Fdqi80eQGfHBcfIuiA');
    }
    exists = await media.mediaItemExists(client, 'Vk_8xRlxmkmSrtFC6ABNFw');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art1.1.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'Vk_8xRlxmkmSrtFC6ABNFw', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #1.1',//Media Item Name.
                            'article #1.1 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: Vk_8xRlxmkmSrtFC6ABNFw');
    }
    exists = await media.mediaItemExists(client, 'th9ahFY2hUuZYq6zcsBjng');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art1.2.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'th9ahFY2hUuZYq6zcsBjng', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #1.2',//Media Item Name.
                            'article #1.2 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: th9ahFY2hUuZYq6zcsBjng');
    }
    exists = await media.mediaItemExists(client, '9e-0S3GWkEObT0bO9NUs6Q');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art1.3.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            '9e-0S3GWkEObT0bO9NUs6Q', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #1.3',//Media Item Name.
                            'article #1.3 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: 9e-0S3GWkEObT0bO9NUs6Q');
    }
        // #2
    exists = await media.mediaItemExists(client, 'G73btOg8GE-q1oK9E16QXw');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art2.webp', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'G73btOg8GE-q1oK9E16QXw', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #2',//Media Item Name.
                            'article #2 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: G73btOg8GE-q1oK9E16QXw');
    }
    exists = await media.mediaItemExists(client, 'jkO6Rzoq9kiIIkYI3nSvog');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art2.1.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'jkO6Rzoq9kiIIkYI3nSvog', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #2.1',//Media Item Name.
                            'article #2.1 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: jkO6Rzoq9kiIIkYI3nSvog');
    }
    exists = await media.mediaItemExists(client, 'y05z0-4bbUKZUMzMC-iesA');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art2.2.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'y05z0-4bbUKZUMzMC-iesA', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #2.2',//Media Item Name.
                            'article #2.2 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: y05z0-4bbUKZUMzMC-iesA');
    }
    exists = await media.mediaItemExists(client, '012_a4DwGEyBgFOOnzHjEQ');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art2.3.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            '012_a4DwGEyBgFOOnzHjEQ', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #2.3',//Media Item Name.
                            'article #2.3 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: 012_a4DwGEyBgFOOnzHjEQ');
    }
        // #3
    exists = await media.mediaItemExists(client, 'dYKfnn0sBEW1s5XcwKimTg');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art3.webp', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'dYKfnn0sBEW1s5XcwKimTg', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #3',//Media Item Name.
                            'article #3 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: dYKfnn0sBEW1s5XcwKimTg');
    }
    exists = await media.mediaItemExists(client, 'z2_fNnEXUk6DLIZtjSZ4yw');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art3.1.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'z2_fNnEXUk6DLIZtjSZ4yw', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #3.1',//Media Item Name.
                            'article #3.1 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: z2_fNnEXUk6DLIZtjSZ4yw');
    }
    exists = await media.mediaItemExists(client, 'inMpm_eRyUyPflYFn1EHFA');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art3.2.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'inMpm_eRyUyPflYFn1EHFA', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #3.2',//Media Item Name.
                            'article #3.2 cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: inMpm_eRyUyPflYFn1EHFA');
    }
    exists = await media.mediaItemExists(client, 'ntYKjj7B2k6hVFR5HGMcZA');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art3.3.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'ntYKjj7B2k6hVFR5HGMcZA', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #3.3',//Media Item Name.
                            'article #3.3 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: ntYKjj7B2k6hVFR5HGMcZA');
    }
    exists = await media.mediaItemExists(client, 'Sopo9cmP3k6y8O2ZfMUN5A');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cover-art3.4.webp', //fileName
                            'image/webp', //fileType
                            '13213', //fileSize
                            'Sopo9cmP3k6y8O2ZfMUN5A', //Media Item Id: leave empty when not needed, e.g. ''
                            'article #3.4',//Media Item Name.
                            'article #3.4 main cover'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: Sopo9cmP3k6y8O2ZfMUN5A');
    }
    



/*
    exists = await media.mediaItemExists(client, 'YPNKM-DYFkCoy8P4F4OY-Q');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'hero-image-homepage.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'YPNKM-DYFkCoy8P4F4OY-Q', //Media Item Id: leave empty when not needed, e.g. ''
                            'Homepage Hero Image',//Media Item Name.
                            'Father and daughter in kitchen'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: YPNKM-DYFkCoy8P4F4OY-Q');
    }

    exists = await media.mediaItemExists(client, 'e-oVETnuUEij414Iq6gcfg');
    if (!exists) {    
        await mediaAPI.createMediaItemWithAPI(token,'sitecore-logo.png', //fileName
                            'image/png', //fileType
                            '13213', //fileSize
                            'e-oVETnuUEij414Iq6gcfg', //Media Item Id: leave empty when not needed, e.g. ''
                            'Sitecore Logo',//Media Item Name.
                            'Sitecore, your partner for awesome web experiences'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: e-oVETnuUEij414Iq6gcfg');
    }

    exists = await media.mediaItemExists(client, 'dkjRFDWSN0KnHk1VvnDZLw');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'cream-latte.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'dkjRFDWSN0KnHk1VvnDZLw', //Media Item Id: leave empty when not needed, e.g. ''
                            'Cream Latte',//Media Item Name.
                            'Tasty Cream Latte'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: dkjRFDWSN0KnHk1VvnDZLw');
    }

    exists = await media.mediaItemExists(client, 'gRTwjIf9QkOQyHYXgAFwbw');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'donuts.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'gRTwjIf9QkOQyHYXgAFwbw', //Media Item Id: leave empty when not needed, e.g. ''
                            'Donuts',//Media Item Name.
                            'Tasty Donuts'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: gRTwjIf9QkOQyHYXgAFwbw');
    }

    exists = await media.mediaItemExists(client, 'Qo4o8lnJY0610sKe0Xlg3g');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'pizza.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'Qo4o8lnJY0610sKe0Xlg3g', //Media Item Id: leave empty when not needed, e.g. ''
                            'Pizza',//Media Item Name.
                            'Tasty Pizza'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: Qo4o8lnJY0610sKe0Xlg3g');
    }

    exists = await media.mediaItemExists(client, 'rOfvb_Ix9kmeT7eRr4N5wg');
    if (!exists) {
        await mediaAPI.createMediaItemWithAPI(token,'soft-ice.jpg', //fileName
                            'image/jpeg', //fileType
                            '13213', //fileSize
                            'rOfvb_Ix9kmeT7eRr4N5wg', //Media Item Id: leave empty when not needed, e.g. ''
                            'Soft Ice',//Media Item Name.
                            'Soft Ice Cream'); //Media Item Description
        console.log(color.SUCCESS,'Media Item created: rOfvb_Ix9kmeT7eRr4N5wg');
    }
*/
    console.log(color.SUCCESS,'Completed - Create Media Assets');


    // Push Content Types
    console.log('');
    console.log(color.INFO,'Step 2/3: Push Content Types');
    var status = await serialize.pushContentTypes();
    
    
    // add Sleep timer to ensure that content items are installed after content types
    console.log(color.INFO,'Wait 10 seconds so push of content types can be completed');
    await cmd.sleep(10000);
    console.log(color.INFO,'Wait done');
    console.log(color.SUCCESS,'Completed - Push Content Types: ' + status);
    
    // Push Content Items
    console.log('');
    console.log(color.INFO,'Step 3/3: Push Content Items');
    for (var i in constants.contentTypes) {
        var typeId = constants.contentTypes[i];
        status = await serialize.pushContentItems(typeId);
        await cmd.sleep(3000); //Wait to prevent serialization not being finished of referenced items.
    }

    console.log(color.SUCCESS,'Completed - Push Content Items');
    
    console.log(color.INFO, 'Script Completed successfully! Have fun!');

}