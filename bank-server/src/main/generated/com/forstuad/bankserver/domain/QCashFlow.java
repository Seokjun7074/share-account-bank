package com.forstuad.bankserver.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCashFlow is a Querydsl query type for CashFlow
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCashFlow extends EntityPathBase<CashFlow> {

    private static final long serialVersionUID = 1442810735L;

    public static final QCashFlow cashFlow = new QCashFlow("cashFlow");

    public final NumberPath<Integer> amount = createNumber("amount", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> dateTime = createDateTime("dateTime", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final StringPath receiver = createString("receiver");

    public final StringPath sender = createString("sender");

    public QCashFlow(String variable) {
        super(CashFlow.class, forVariable(variable));
    }

    public QCashFlow(Path<? extends CashFlow> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCashFlow(PathMetadata metadata) {
        super(CashFlow.class, metadata);
    }

}

