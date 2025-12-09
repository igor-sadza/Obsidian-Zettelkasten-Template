# Zettelkasten Knowledge Base
<img src="https://api.dicebear.com/9.x/notionists-neutral/svg?seed=Zettelkasten" align="left" width="7%" height="auto"/>

A Zettelkasten (German: 'slipbox', plural Zettelkästen) or card file consists of small items of information stored on Zetteln (German: 'slips'), paper slips or cards, that may be linked to each other through subject headings or other metadata such as numbers and tags.

## Daily Workflow (5-Minute Rule)

1. Capture ideas in **03 - Fleeting**
2. Process fleeting notes into **00 - Drafts**
3. Develop important drafts in **01 - Develop**
4. Promote finished work to **04 - Knowledge Sharing**
5. Archive inactive material in **98 - Archives**
6. Update **97 - Indexes** weekly

## Note Flow

```mermaid
flowchart LR
    F[03 - Fleeting] --> D[00 - Drafts]
    D --> DEV[01 - Develop]
    DEV --> K[04 - Knowledge Sharing]
    K --> A[98 - Archives]

    R[02 - Research] --> D
    R --> DEV

    I[97 - Indexes] -.-> F
    I -.-> D
    I -.-> DEV
    I -.-> K
    I -.-> R
```

## System Rules

- One idea per note
- Always link related notes
- Fleeting notes must be processed
- Only polished work goes into Knowledge Sharing
- Archives are read-only


## Quick Usage Guide

- Random thought? → 03 - Fleeting
- Messy first idea? → 00 - Drafts
- Improving an idea? → 01 - Develop
- From a book/article? → 02 - Research
- Ready for publishing? → 04 - Knowlege Sharing
- No longer active? → 98 - Archives
- Excalidraw or sketches? → _misc


## Knowledge Base Structure

<table>
   <tr>
       <td><strong>Folder</strong></td>
       <td><strong>Purpose</strong></td>
       <td><strong>What Goes Here</strong></td>
   </tr>

   <tr>
       <td><sup>00 - Drafts</sup></td>
       <td><sup>Raw idea capture</sup></td>
       <td><sup>Unfinished thoughts, early writing, brain dumps</sup></td>
   </tr>

   <tr>
       <td><sup>01 - Develop</sup></td>
       <td><sup>Idea refinement</sup></td>
       <td><sup>Expanded notes, structured thinking, knowledge building</sup></td>
   </tr>

   <tr>
       <td><sup>02 - Research</sup></td>
       <td><sup>Source notes</sup></td>
       <td><sup>Book notes, articles, studies, references</sup></td>
   </tr>

   <tr>
       <td><sup>03 - Fleeting</sup></td>
       <td><sup>Temporary notes</sup></td>
       <td><sup>Quick thoughts, daily notes, reminders</sup></td>
   </tr>

   <tr>
       <td><sup>04 - Knowledge Sharing</sup></td>
       <td><sup>Final output</sup></td>
       <td><sup>Blog posts, tutorials, documentation, presentations</sup></td>
   </tr>

   <tr>
       <td><sup>05 - Other</sup></td>
       <td><sup>Miscellaneous</sup></td>
       <td><sup>Logs, experiments, uncategorized content</sup></td>
   </tr>

   <tr>
       <td><sup>96 - Images</sup></td>
       <td><sup>Media storage</sup></td>
       <td><sup>Diagrams, screenshots, illustrations</sup></td>
   </tr>

   <tr>
       <td><sup>97 - Indexes</sup></td>
       <td><sup>Navigation</sup></td>
       <td><sup>Maps of content, topic hubs</sup></td>
   </tr>

   <tr>
       <td><sup>98 - Archives</sup></td>
       <td><sup>Long-term storage</sup></td>
       <td><sup>Old projects, deprecated notes</sup></td>
   </tr>

   <tr>
       <td><sup>99 - Templates</sup></td>
       <td><sup>Note standards</sup></td>
       <td><sup>Reusable templates for notes</sup></td>
   </tr>

   <tr>
       <td><sup>_scripts</sup></td>
       <td><sup>automation</sup></td>
       <td><sup>helper scripts (e.g., tag formatting)</sup></td>
   </tr>

   <tr>
       <td><sup>_misc</sup></td>
       <td><sup>General artifacts</sup></td>
       <td><sup>Drawings, temporary visuals, other stuff </sup></td>
   </tr>
</table>
