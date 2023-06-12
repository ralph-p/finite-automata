import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3'

type FSMVisualizerProps = {
  currentState: string
  states: string[];
  finalStates?: string[];
}
export const FSMVisualizer = ({ currentState, states, finalStates }: FSMVisualizerProps) => {
  const svgRef = useRef(null);
  const getStateColor = (stateName: string) => {
    if (stateName === currentState) return 'green'
    if (finalStates && finalStates.includes(stateName)) return 'red'
    return 'blue'
  }
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // remove the old layer when rendering the new svg
    svg.selectAll('circle').remove()
    svg.selectAll('text').remove()
    // set the circles 
    svg.selectAll('circle')
      .data(states)
      .enter()
      .append('circle')
      .attr('cx', (d: string, i: number) => i * 150 + 40)
      .attr('cy', 70)
      .attr('r', 40)
      .attr('fill', (d: string) => getStateColor(d));

    svg.selectAll('text')
      .data(states)
      .enter()
      .append('text')
      .attr('x', (d: string, i: number) => i * 150 + 40)
      .attr('y', 70)
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'central')
      .text((d: string) => d)
      .attr('fill', 'white');
  }, [currentState, states]);

  return (
    <div className='p-3'>
      Current state is in Green, Final States are in Red, and all other states are Blue. 
      <svg ref={svgRef} width={600} height={150} />
    </div>
  );
};