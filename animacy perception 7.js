/**************************** 
 * Animacyperception_7 Test *
 ****************************/

import { PsychoJS } from './lib/core-3.0.2.js';
import * as core from './lib/core-3.0.2.js';
import { TrialHandler } from './lib/data-3.0.2.js';
import { Scheduler } from './lib/util-3.0.2.js';
import * as util from './lib/util-3.0.2.js';
import * as visual from './lib/visual-3.0.2.js';
import { Sound } from './lib/sound-3.0.2.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'animacyPerception_7';  // from the Builder filename that created this script
let expInfo = {'姓名': '', '性别': '', '年龄': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instruction1RoutineBegin);
flowScheduler.add(instruction1RoutineEachFrame);
flowScheduler.add(instruction1RoutineEnd);
flowScheduler.add(instruction2RoutineBegin);
flowScheduler.add(instruction2RoutineEachFrame);
flowScheduler.add(instruction2RoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thankuRoutineBegin);
flowScheduler.add(thankuRoutineEachFrame);
flowScheduler.add(thankuRoutineEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.2';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var instruction1Clock;
var instruct1;
var instruction2Clock;
var instruct2;
var trialClock;
var polygon;
var image;
var hint;
var thankuClock;
var thankU;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  instruct1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruct1', 
    image : 'instruct_3.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.96, 0.72],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  instruct2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instruct2', 
    image : 'instruct_4.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.96, 0.72],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  
  polygon = new visual.Rect ({
    win: psychoJS.window, name: 'polygon',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'hint',
    text: 'A无生命         B有生命',
    font: 'Arial',
    pos: [0, 0], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "thanku"
  thankuClock = new util.Clock();
  thankU = new visual.ImageStim({
    win : psychoJS.window,
    name : 'thankU', 
    image : 'instruct_5.jpg', mask : undefined,
    ori : 0, pos : [0, 0], size : [0.96, 0.72],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var instructResp1;
var instruction1Components;
function instruction1RoutineBegin() {
  //------Prepare to start Routine 'instruction1'-------
  t = 0;
  instruction1Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instructResp1 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  instruction1Components = [];
  instruction1Components.push(instruct1);
  instruction1Components.push(instructResp1);
  
  for (const thisComponent of instruction1Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function instruction1RoutineEachFrame() {
  //------Loop for each frame of Routine 'instruction1'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instruction1Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruct1* updates
  if (t >= 0.0 && instruct1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct1.tStart = t;  // (not accounting for frame time here)
    instruct1.frameNStart = frameN;  // exact frame index
    instruct1.setAutoDraw(true);
  }

  
  // *instructResp1* updates
  if (t >= 0.0 && instructResp1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructResp1.tStart = t;  // (not accounting for frame time here)
    instructResp1.frameNStart = frameN;  // exact frame index
    instructResp1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instructResp1.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (instructResp1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['q']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      instructResp1.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      instructResp1.rt = instructResp1.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of instruction1Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEnd() {
  //------Ending Routine 'instruction1'-------
  for (const thisComponent of instruction1Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(instructResp1.keys) >= 0) {    // No response was made
      instructResp1.keys = undefined;
  }
  
  psychoJS.experiment.addData('instructResp1.keys', instructResp1.keys);
  if (typeof instructResp1.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('instructResp1.rt', instructResp1.rt);
      routineTimer.reset();
      }
  
  // the Routine "instruction1" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var instructResp2;
var instruction2Components;
function instruction2RoutineBegin() {
  //------Prepare to start Routine 'instruction2'-------
  t = 0;
  instruction2Clock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  instructResp2 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  instruction2Components = [];
  instruction2Components.push(instruct2);
  instruction2Components.push(instructResp2);
  
  for (const thisComponent of instruction2Components)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function instruction2RoutineEachFrame() {
  //------Loop for each frame of Routine 'instruction2'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instruction2Clock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instruct2* updates
  if (t >= 0.0 && instruct2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instruct2.tStart = t;  // (not accounting for frame time here)
    instruct2.frameNStart = frameN;  // exact frame index
    instruct2.setAutoDraw(true);
  }

  
  // *instructResp2* updates
  if (t >= 0.0 && instructResp2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructResp2.tStart = t;  // (not accounting for frame time here)
    instructResp2.frameNStart = frameN;  // exact frame index
    instructResp2.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { instructResp2.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (instructResp2.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['return']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      instructResp2.keys = theseKeys[theseKeys.length-1];  // just the last key pressed
      instructResp2.rt = instructResp2.clock.getTime();
      // was this 'correct'?
      if (instructResp2.keys == 'enter') {
          instructResp2.corr = 1;
      } else {
          instructResp2.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of instruction2Components)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instruction2RoutineEnd() {
  //------Ending Routine 'instruction2'-------
  for (const thisComponent of instruction2Components) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  // check responses
  if (['', [], undefined].indexOf(instructResp2.keys) >= 0) {    // No response was made
      instructResp2.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (instructResp2.keys == undefined) {
    if (psychoJS.str('enter').toLowerCase() == 'none') {
       instructResp2.corr = 1  // correct non-response
    } else {
       instructResp2.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('instructResp2.keys', instructResp2.keys);
  psychoJS.experiment.addData('instructResp2.corr', instructResp2.corr);
  if (typeof instructResp2.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('instructResp2.rt', instructResp2.rt);
      routineTimer.reset();
      }
  
  // the Routine "instruction2" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'condition2.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var response;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  
  image.setSize(size);
  image.setImage(stiPath);
  response = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(polygon);
  trialComponents.push(image);
  trialComponents.push(response);
  trialComponents.push(hint);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  
  // *polygon* updates
  if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    polygon.tStart = t;  // (not accounting for frame time here)
    polygon.frameNStart = frameN;  // exact frame index
    polygon.setAutoDraw(true);
  }

  frameRemains = 0.0 + jitter - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    polygon.setAutoDraw(false);
  }
  
  // *image* updates
  if (t >= jitter && image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    image.tStart = t;  // (not accounting for frame time here)
    image.frameNStart = frameN;  // exact frame index
    image.setAutoDraw(true);
  }

  frameRemains = jitter + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    image.setAutoDraw(false);
  }
  
  // *response* updates
  if (t >= jitter_response && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    response.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(function() { response.clock.reset(); }); // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }

  if (response.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['home', 'pageup']});
    
    // check for quit:
    if (theseKeys.indexOf('escape') > -1) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (response.keys.length === 0) {  // then this was the first keypress
        response.keys = theseKeys[0];  // just the first key pressed
        response.rt = response.clock.getTime();
        // was this 'correct'?
        if (response.keys == 'pageup') {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // *hint* updates
  if (t >= jitter_response && hint.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    hint.tStart = t;  // (not accounting for frame time here)
    hint.frameNStart = frameN;  // exact frame index
    hint.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  
  
  // check responses
  if (['', [], undefined].indexOf(response.keys) >= 0) {    // No response was made
      response.keys = undefined;
  }
  
  // was no response the correct answer?!
  if (response.keys == undefined) {
    if (psychoJS.str('pageup').toLowerCase() == 'none') {
       response.corr = 1  // correct non-response
    } else {
       response.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('response.keys', response.keys);
  psychoJS.experiment.addData('response.corr', response.corr);
  if (typeof response.keys !== 'undefined') {  // we had a response
      psychoJS.experiment.addData('response.rt', response.rt);
      routineTimer.reset();
      }
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var thankuComponents;
function thankuRoutineBegin() {
  //------Prepare to start Routine 'thanku'-------
  t = 0;
  thankuClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  thankuComponents = [];
  thankuComponents.push(thankU);
  
  for (const thisComponent of thankuComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function thankuRoutineEachFrame() {
  //------Loop for each frame of Routine 'thanku'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = thankuClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *thankU* updates
  if (t >= 0.0 && thankU.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    thankU.tStart = t;  // (not accounting for frame time here)
    thankU.frameNStart = frameN;  // exact frame index
    thankU.setAutoDraw(true);
  }

  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (thankU.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    thankU.setAutoDraw(false);
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of thankuComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function thankuRoutineEnd() {
  //------Ending Routine 'thanku'-------
  for (const thisComponent of thankuComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({message, isCompleted});

  return Scheduler.Event.QUIT;
}
