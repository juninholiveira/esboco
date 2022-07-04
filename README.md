# esboco app

<p align="center">
<img src="public/logo512.png" alt="esboco" height="200">
</p>

## Description
Set the expected time for the speech to end, and then load the sketch written in a formatted .MD file.

When you begin to speak, check the checkbox for the first section. When you enter the next section, check its checkbox.

At the end of every Section Title, there will be a time stamp (automatic calculated based on the expected time to end), that indicates in which time you should already be when starting that section. You can accompain with the Clock on the top-right corner.

When checking each checkbox, the time left will be calculated to see if you're ahead or behind, and the result will be revealed by a color-code in the vertical bar at left of the text.
- Red: Much behind, run!
- Yellow: A little behind, just speak a little bit faster
- White: On time
- Green: A little ahead
- Pink: Much ahead

## Formatting

Create the .MD file with the following formatting:
- Speech Theme (Number followed by the Title on first line (i.e. "49 - Será que um dia a Terra vai ser limpa?")
- Section
  - @{Title}
  - &{Total time in seconds}
- Topics:
  - #{Level 1 Main Text} / ##{Level 2 Main Text} / ###{Level 3 Main Text}
  - ${Hidden Text}
- Verses:
  - %{Main Text} / ~{Main Text FOR CITATION}
  - ${Hidden Text}
- Media:
  - ^{Main Text}
