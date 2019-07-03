import React, { Component } from 'react';
import Highlight from 'react-highlight';
import PropTypes from 'prop-types';
import range from 'lodash/range';
import { storiesOf } from '@storybook/react';
import { Paginator } from './Paginator';

// eslint-disable-next-line react/prop-types
const CommentList = ({ data }) => (
    <div id="project-comments" className="commentList">
        <ul>
            {data.map((comment, index) => (
                <div key={index}>{comment.comment}</div>
            ))}
        </ul>
    </div>
);

export class PaginatorExample extends Component {
    static propTypes = {
        perPage: PropTypes.number.isRequired,
        marginPagesDisplayed: PropTypes.number.isRequired,
        pageRangeDisplayed: PropTypes.number.isRequired,
    };

    state = {
        data: [],
        offset: 0,
    };

    loadCommentsFromServer() {
        const { offset } = this.state;
        const { perPage } = this.props;
        const limit = offset + perPage;
        // Supposed server response
        const data = {
            comments: range(offset, limit).map((index) => ({ comment: `Comment #${index + 1}` })),
            meta: {
                total_count: 100,
                limit: 10,
            },
        };
        // Simulate async request
        setTimeout(() => {
            this.setState({
                data: data.comments,
                pageCount: Math.ceil(data.meta.total_count / data.meta.limit),
            });
        }, 200);
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handlePageClick = (data) => {
        const { selected } = data;
        const offset = Math.ceil(selected * this.props.perPage);

        this.setState({ offset }, () => {
            this.loadCommentsFromServer();
        });
    };

    render() {
        const { marginPagesDisplayed, pageRangeDisplayed } = this.props;

        return (
            <div className="commentBox">
                <CommentList data={this.state.data} />
                <Paginator
                    marginPagesDisplayed={marginPagesDisplayed}
                    pageRangeDisplayed={pageRangeDisplayed}
                    pageCount={this.state.pageCount}
                    onPageChange={this.handlePageClick}
                />
            </div>
        );
    }
}

storiesOf('Paginator', module)
    .add('with margin pages display and page range set to 2', () => (
        <>
            <PaginatorExample marginPagesDisplayed={2} pageRangeDisplayed={2} perPage={10} />
            <Highlight className="html">
                {'<Paginator' +
                    '\n\tmarginPagesDisplayed={2}' +
                    '\n\tpageRangeDisplayed={2}' +
                    '\n\tpageCount={this.state.pageCount}' +
                    '\n\tonPageChange={this.handlePageClick}' +
                    '\n/>'}
            </Highlight>
        </>
    ))
    .add('with margin pages display and page range set to 4', () => (
        <>
            <PaginatorExample marginPagesDisplayed={4} pageRangeDisplayed={4} perPage={10} />
            <Highlight className="html">
                {'<Paginator' +
                    '\n\tmarginPagesDisplayed={4}' +
                    '\n\tpageRangeDisplayed={4}' +
                    '\n\tpageCount={this.state.pageCount}' +
                    '\n\tonPageChange={this.handlePageClick}' +
                    '\n/>'}
            </Highlight>
        </>
    ));
