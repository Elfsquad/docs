import React, { useState } from 'react';
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre'
import CodeBlock from '@theme/CodeBlock';
import { CodeDocSection } from './CodeDocSection';


export const CodeDoc = ({children}) => {
    const childElements = React.Children
        .toArray(children)
        .filter(child => React.isValidElement(child)) as React.ReactElement[];

    const codeBlock = childElements.find(child => child.type === CodeBlock || child.type === MDXPre);
    const sections = childElements.filter(child => child.type === CodeDocSection );
    
    const [metadataString, setMetadataString] = useState('');

    const onSectionClick = (e) => {
        const highlight = e?.props.highlight ?? '';
        console.log('highlight', highlight);
        setMetadataString(highlight);        
    }

    return <div className="grid grid-cols-2 gap-8">
        <div>
            {
                sections.map((section) => {
                    return <div  onClick={() => onSectionClick(section)}>
                        <CodeDocSection {...section.props}></CodeDocSection>
                    </div>
                })
            
            }
        </div>
        <div>
            <CodeBlock {...codeBlock.props} metastring={metadataString}></CodeBlock>
        </div>
    </div>
}