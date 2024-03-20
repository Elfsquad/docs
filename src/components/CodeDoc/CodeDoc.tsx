import React, { useState } from 'react';
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre'
import CodeBlock from '@theme/CodeBlock';
import { CodeDocSection } from './CodeDocSection';
import styles from './CodeBlock.module.css';


export const CodeDoc = ({children}) => {
    const [metadataString, setMetadataString] = useState('');
    const [activeSection, setActiveSection] = useState(0);

    const childElements = React.Children
        .toArray(children)
        .filter(child => React.isValidElement(child)) as React.ReactElement[];

    const codeBlock = childElements.find(child => child.type === CodeBlock || child.type === MDXPre);
    const sections = childElements.filter(child => child.type === CodeDocSection );
    
    const onSectionClick = (e, index) => {
        const highlight = e?.props.highlight ?? '';
        setActiveSection(index);
        setMetadataString(highlight);        
    }

    return <div className="grid grid-cols-2 gap-8">
        <div>
            {
                sections.map((section, index) => {
                    return <div 
                        className={`rounded p-4 hover:bg-adaptable-green cursor-pointer ${activeSection == index ? 'bg-adaptable-green': ''}`} 
                        onClick={() => onSectionClick(section, index)}>
                        <CodeDocSection {...section.props}></CodeDocSection>
                    </div>
                })            
            }
        </div>
        <div>
            <CodeBlock {...codeBlock.props} metastring={metadataString} key={metadataString}></CodeBlock>
        </div>
    </div>
}